/* SWAGGER ADMIN*/
/**
 * @swagger
 * /admin/user/create:
 *   post:
 *     summary: Création User.
 *     description: Crée un nouveau user.
 *     parameters:
 *       - in: body
 *         description: Création d'un nouveau salarié.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             firstname:
 *               type: string
 *             lastname:
 *               type: string
 *             status:
 *               type: string
 *             active:
 *               type: boolean
 *     responses:
 *       200:
 *         description: Création un nouveau user avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Crée un nouveau user.
 *                   example: 1
 *       500:
 *         description: Erreur de serveur lors de la création d'un nouvel utilisateur.
 */

/**
 * @swagger
 * /admin/user/delete/{id}:
 *   delete:
 *     summary: Suppression d'User.
 *     description: Suppression d'User.
 *      parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *          description: id de l'utilisateur
 * 
 *     responses:
 *       200:
 *         description: Suppresion d'un user avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Suppression d'un user.
 *                   example: 1
 *       500:
 *         description: Erreur de serveur lors de la suppression d'un utilisateur.
 */

/**
 * @swagger
 * /admin/user/not_active/{id}:
 *   put:
 *     summary: Set not_active d'user.
 *     description: Set not_active d'user.
 *      parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *          description: id de l'utilisateur
 * 
 *     responses:
 *       200:
 *         description: Set not_active d'user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Set not_active d'user.
 *                   example: 1
 *       500:
 *         description: Erreur de serveur lors du set not_active d'un user.
 */

/* SWAGGER USER */
/**
 * @swagger
 * paths:
 *  /users:
 *  get:
 *      description: Get all users
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *             description: Erreur de serveur lors de la récupération des users
 */

/**
 * @swagger
 * paths:
 *  /user/{id}:
 *    get:
 *      description: Get user by id
 *      parameters:
 *         - in: path
 *           name: id
 *           type: integer
 *           required: true
 *           description: id of the user
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la récupération du user
 *         '404':
 *           description: User non trouvé
 */

/**
 * @swagger
 * paths:
 *  /users/active:
 *  get:
 *      description: Get all users active
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *             description: Erreur de serveur lors de la récupération des users active
 */

/**
 * @swagger
 * paths:
 *  /users/not_active:
 *  get:
 *      description: Get all users not_active
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *             description: Erreur de serveur lors de la récupération des users not_active
 */

/* SWAGGER TIPS */

/**
 * @swagger
 * paths:
 *  /tips/new:
 *   post:
 *    summary: Créer un table_tips
 *     parameters:
 *       - in: body
 *         description: Création d'un nouveau tips.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             tips:
 *               type: int
 *             id_restaurant:
 *               type: int
 *             id_service:
 *               type: id
 * 
 *    responses:
 *     '200':
 *         description: ID du tips payment créé avec succès
 *     '500':
 *         description: Erreur 
 */

/**
 * @swagger
 * paths:
 *  /tips/payment:
 *   post:
 *    summary: Créer un tips payment
 *    parameters:
 *     - name: id_user
 *       in: body
 *       description: ID de l'utilisateur
 *       required: true
 *       schema:
 *          type: object
 *          properties:
 *             id_user:
 *              type: integer
 *              description: ID de l'utilisateur
 *              example: 1
 *             amount:
 *                type: integer
 *                description: Montant du tips
 *                example: 10
 * 
 *    responses:
 *     '200':
 *         description: ID du tips payment créé avec succès
 */

/**
 * @swagger
 * paths:
 *  /tips/service/{id}:
 *      get:
 *        description: Get tips by service_id
 *        parameters:
 *          - in: path
 *            name: service_id
 *            type: integer
 *            required: true
 *            description: service_id of the tips 
 *        responses:
 *         '200':
 *           description: A successful response
 * 
 */

/**
 * @swagger
 * paths:
 *  /tips/month/{date}:
 *      get:
 *        description: Get tips for month by date
 *        parameters:
 *          - in: path
 *            name: service_id
 *            type: integer
 *            required: true
 *            description: date=2023-05-01
 *        responses:
 *         '200':
 *           description: A successful response
 * 
 */

/**
 * @swagger
 * paths:
 *  /tips/week:
 *  get:
 *      description: Get the best tips grouped by week
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *             description: Erreur de serveur lors de la récupération des users active
 */

/* SWAGGER SERVICE */

/**
 * @swagger
 * paths:
 *  /service/new:
 *   post:
 *     summary: Création d'un service.
 *     description: Création d'un service
 *     parameters:
 *       - in: body
 *         description: Création d'un service.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             shiftType:
 *               type: int
 *             shiftClosed:
 *               type: boolean
 *     responses:
 *       200:
 *         description: Création d'un service avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Création d'un service.
 *                   example: 1
 *       500:
 *         description: Erreur de serveur .
 */

/**
 * @swagger
 * paths:
 *  /service/user/new:
 *   post:
 *     summary: Création de la relation entre un user et service.
 *     description: Création de la relation entre un user et service
 *     parameters:
 *       - in: body
 *         description: Création de la relation entre un user et service
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_service:
 *               type: int
 *             id_user:
 *               type: int
 *     responses:
 *       200:
 *         description:  Création de la relation entre un user et service avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Erreur de serveur .
 */

/**
 * @swagger
 * paths:
 *  /service/user:
 *  get:
 *      description: Get all services_users
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *             description: Erreur de serveur lors de la récupération des users
 */

/**
 * @swagger
 * paths:
 *  /service/users/{id_service}:
 *    get:
 *      description: Get all services user by id service
 *      parameters:
 *         - in: path
 *           name: id
 *           type: integer
 *           required: true
 *           description: id of the service
 *      responses:
 *         '200':
 *            description: get
 *         '500':
 *           description: Erreur de serveur
 */

/* SWAGGER RESTAURANT_TABLE */

/**
 * @swagger
 * /tables:
 *   post:
 *     summary: Créer une nouvelle table de restaurant.
 *     description: Crée une nouvelle table de restaurant avec un nom donné.
 *     parameters:
 *       - in: body
 *         name: name
 *         description: Le nom de la nouvelle table de restaurant.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *              name:
 *                  type: string
 *     responses:
 *       200:
 *         description: ID de la nouvelle table de restaurant créée avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID de la nouvelle table de restaurant.
 *                   example: 1
 *       500:
 *         description: Erreur de serveur lors de la création de la nouvelle table de restaurant.
 */